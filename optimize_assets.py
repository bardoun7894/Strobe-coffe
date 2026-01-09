from PIL import Image
import os

source_dir = "extracted_assets"
target_dir = "public/assets"
mapping = {
    "image_p0_0.png": "hero-beans.jpg",
    "image_p9_0.png": "story-interior.jpg",
    "image_p12_0.png": "cups-mockup.jpg",
    "image_p14_0.png": "bag-mockup.jpg",
    "image_p10_0.png": "storefront.jpg",
    "image_p15_0.png": "app-mockup.jpg"
}

if not os.path.exists(target_dir):
    os.makedirs(target_dir)

for src, dest in mapping.items():
    src_path = os.path.join(source_dir, src)
    dest_path = os.path.join(target_dir, dest)
    
    if os.path.exists(src_path):
        print(f"Processing {src} -> {dest}...")
        try:
            with Image.open(src_path) as img:
                # Resize if too large (e.g. > 2000px width)
                if img.width > 2000:
                    ratio = 2000 / img.width
                    new_height = int(img.height * ratio)
                    img = img.resize((2000, new_height), Image.ANTIALIAS)
                
                # Convert to RGB if saving as JPG
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                    
                img.save(dest_path, "JPEG", quality=85)
                print(f"Saved {dest}")
        except Exception as e:
            print(f"Error processing {src}: {e}")
    else:
        print(f"Source file {src} not found.")

print("Optimization complete.")
