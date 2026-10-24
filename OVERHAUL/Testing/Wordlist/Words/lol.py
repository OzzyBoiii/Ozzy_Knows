from pathlib import Path

input_file = Path(r"C:\Users\CrozzyBoii\Documents\Ozzy_Knower\app-materials\Ozzy_Knows\OVERHAUL\Testing\Wordlist\Words\english.txt")
output_dir = Path(r"C:\Users\CrozzyBoii\Documents\Ozzy_Knower\app-materials\Ozzy_Knows\OVERHAUL\Testing\Wordlist\Words\Divided")

chunk_size = 350

output_dir.mkdir(parents=True, exist_ok=True)

text = input_file.read_text(encoding="utf-8")
words = text.split()

total_chunks = (len(words) + chunk_size - 1) // chunk_size

for i in range(total_chunks):
    chunk = words[i * chunk_size:(i + 1) * chunk_size]
    out_file = output_dir / f"english_{i + 1:04d}.txt"
    out_file.write_text(" ".join(chunk), encoding="utf-8")

print(f"Gotovo: {len(words)} riječi podijeljeno u {total_chunks} datoteka.")
