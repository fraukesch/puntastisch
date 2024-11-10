To convert JPG to WEBP with 800px width
    find . -type f -name '*jpg' -print | sed s/.jpg//g | xargs -i convert {}.jpg -quality 80 -resize 800x "{}.webp"
