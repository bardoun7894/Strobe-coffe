import fitz
import os

pdf_path = "../strobe-coffee-final.pdf"
output_dir = "extracted_assets"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)
print(f"Opened {pdf_path}, found {len(doc)} pages.")

image_count = 0
for page_index, page in enumerate(doc):
    image_list = page.get_images(full=True)
    if image_list:
        print(f"Found {len(image_list)} images on page {page_index}")
    else:
        print(f"No images found on page {page_index}")

    for image_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_filename = f"{output_dir}/image_p{page_index}_{image_index}.{image_ext}"
        
        with open(image_filename, "wb") as f:
            f.write(image_bytes)
        
        print(f"Saved {image_filename}")
        image_count += 1

print(f"Extraction complete. Total images: {image_count}")
