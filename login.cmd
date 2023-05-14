echo "Logging in"

curl -v -d "@login.json" POST -H "Content-Type:application/json" http://localhost:3000/login 

@REM curl https://dev.stedi.me/validate/1a3f2f7b-afd0-4040-8628-6b485ca353a7