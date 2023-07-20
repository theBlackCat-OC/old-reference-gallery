$date = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$message = "Commit made on $date with Love"

git add .
git commit -m $message
git push -u origin main