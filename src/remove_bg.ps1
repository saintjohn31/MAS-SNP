Add-Type -AssemblyName System.Drawing

$sourceCode = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;
using System.Collections.Generic;

public class ImageProcessor {
    public static void RemoveBackground(string inputPath, string outputPath, int threshold) {
        Console.WriteLine("C#: Loading image from " + inputPath + "...");
        using (Bitmap bmp = (Bitmap)Image.FromFile(inputPath)) {
            int width = bmp.Width;
            int height = bmp.Height;
            Console.WriteLine("C#: Image size " + width + "x" + height);
            
            // Create target bitmap with ARGB format
            using (Bitmap newBmp = new Bitmap(width, height, PixelFormat.Format32bppArgb)) {
                using (Graphics g = Graphics.FromImage(newBmp)) {
                    g.DrawImage(bmp, 0, 0);
                }
                
                // Get background reference color from (0,0)
                Color refColor = newBmp.GetPixel(0, 0);
                int refR = refColor.R;
                int refG = refColor.G;
                int refB = refColor.B;
                Console.WriteLine("C#: Reference background color R=" + refR + ", G=" + refG + ", B=" + refB);
                
                // Lock bits for fast memory access
                BitmapData data = newBmp.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
                int bytes = Math.Abs(data.Stride) * height;
                byte[] rgbValues = new byte[bytes];
                Marshal.Copy(data.Scan0, rgbValues, 0, bytes);
                
                // BFS Queue for flood fill
                Queue<Point> queue = new Queue<Point>();
                bool[] visited = new bool[width * height];
                
                // Add 4 corners
                Point[] corners = new Point[] {
                    new Point(0, 0),
                    new Point(width - 1, 0),
                    new Point(0, height - 1),
                    new Point(width - 1, height - 1)
                };
                
                foreach (Point p in corners) {
                    queue.Enqueue(p);
                    visited[p.Y * width + p.X] = true;
                }
                
                int cleared = 0;
                while (queue.Count > 0) {
                    Point curr = queue.Dequeue();
                    int cx = curr.X;
                    int cy = curr.Y;
                    
                    int idx = cy * data.Stride + cx * 4;
                    int b = rgbValues[idx];
                    int gVal = rgbValues[idx + 1];
                    int r = rgbValues[idx + 2];
                    
                    double dist = Math.Sqrt(Math.Pow(r - refR, 2) + Math.Pow(gVal - refG, 2) + Math.Pow(b - refB, 2));
                    
                    if (dist < threshold) {
                        rgbValues[idx + 3] = 0; // Transparent
                        cleared++;
                        
                        Point[] neighbors = new Point[] {
                            new Point(cx - 1, cy),
                            new Point(cx + 1, cy),
                            new Point(cx, cy - 1),
                            new Point(cx, cy + 1)
                        };
                        
                        foreach (Point n in neighbors) {
                            if (n.X >= 0 && n.X < width && n.Y >= 0 && n.Y < height) {
                                int nIdx = n.Y * width + n.X;
                                if (!visited[nIdx]) {
                                    visited[nIdx] = true;
                                    queue.Enqueue(n);
                                }
                            }
                        }
                    }
                }
                
                // Copy back and save
                Marshal.Copy(rgbValues, 0, data.Scan0, bytes);
                newBmp.UnlockBits(data);
                
                newBmp.Save(outputPath, ImageFormat.Png);
                Console.WriteLine("C#: Cleared " + cleared + " background pixels. Output saved successfully.");
            }
        }
    }
}
"@

Write-Host "Compiling inline C# image processor code..."
Add-Type -TypeDefinition $sourceCode -ReferencedAssemblies System.Drawing

Write-Host "Calling background remover..."
[ImageProcessor]::RemoveBackground("C:\Users\johnr\MAS-SNP\src\logopage.jpg", "C:\Users\johnr\MAS-SNP\src\logo.png", 100)

Write-Host "Done!"
