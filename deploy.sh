#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e &&

# 生成静态文件
yarn docs:build &&

cd docs/.vitepress/dist &&
git init &&
git add -A &&
git commit -m 'deploy' &&
git remote add origin git@github.com:magnum-zx/zx-blog.git &&
git push -f -u origin main:gh-pages &&
cd -