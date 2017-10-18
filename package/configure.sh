#!/usr/bin/env bash
DIR="$(sudo dirname "$(readlink -f "$0")")"
cd "$DIR"
cd ..

sudo chown -R ubuntu temp/.

cd temp

if [ -d ~/.android ]; then
    rm -r ~/.android
fi  
if [ -d ~/.gradle ]; then
    rm -r ~/.gradle
fi  
if [ -d .android ]; then
    rm -r .android
fi  
if [ -d .gradle ]; then
    rm -r .gradle
fi  

mkdir .gradle
cd .gradle
export GRADLE_USER_HOME="$(pwd)"
cd ..

mkdir .android
cd .android
export ANDROID_SDK_HOME="$(pwd)"
cd ..

mkdir gradle
cd gradle
wget https://services.gradle.org/distributions/gradle-3.3-bin.zip
unzip gradle-3.3-bin.zip
rm gradle-3.3-bin.zip
cd gradle-3.3/bin
export PATH=$PATH:"$(pwd)"
cd ../../..

mkdir android-sdk
cd android-sdk
wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip
unzip sdk-tools-linux-3859397.zip
rm sdk-tools-linux-3859397.zip
tools/android update sdk --no-ui --use-sdk-wrapper
export ANDROID_HOME="$(pwd)"
cd tools
export PATH=$PATH:"$(pwd)"
cd bin
export PATH=$PATH:"$(pwd)"
cd ../..
cd ..

cd ..