set -e
yarn build 
cd dist 
git init 
git add -A
git commit -m 'deploy' 
git remote add origin git@github.com:wgbcode/big-screen.git 
git push -uf origin master:gh-pages 
cd -