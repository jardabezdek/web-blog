#!/bin/bash

# First commit and push everything WITHOUT images
git add .
git reset HEAD src/content/blog/images/
git stash  # temporarily stash the images
git commit -m "chore: add app without images"
git push -f origin master
echo "✅ Pushed everything without images"
sleep 2

# Restore images from stash
git stash pop

# Push each image group separately
for prefix in 2019_Barcelona 2019_Kodan 2019_Krakov 2019_USA 2020_London 2020_Mallorca 2021_Rim 2021_Viden 2021_Zahreb 2022_Dolomites 2022_Dubrovnik 2022_Madrid 2022_Pariz 2022_Stockholm 2023_Irsko 2023_Island 2023_Londyn 2023_Malajsie 2023_Manchester 2024_Dublin 2024_Estonsko 2024_Island 2024_NYC 2024_Namibie 2025_FAE 2025_london 2025_slovenia 2025_stockholm 2026_colorado 2026_milan; do
    git add src/content/blog/images/${prefix}*
    git commit -m "chore: add images for ${prefix}"
    git push origin master
    echo "✅ Pushed ${prefix}"
    sleep 2
done

echo "🎉 All done!"
