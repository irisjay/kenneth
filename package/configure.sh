#!/usr/bin/env bash
DIR="$(sudo dirname "$(readlink -f "$0")")"
cd "$DIR"
cd ..

package/own.sh
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
cd ..

mkdir .android
cd .android
cd ..

mkdir gradle
cd gradle
wget https://services.gradle.org/distributions/gradle-2.14.1-bin.zip
unzip gradle-2.14.1-bin.zip
rm gradle-2.14.1-bin.zip
cd gradle-2.14.1/bin
cd ../../..

mkdir android-sdk
cd android-sdk
wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip
unzip sdk-tools-linux-3859397.zip
rm sdk-tools-linux-3859397.zip
tools/bin/sdkmanager --update
cd ..

cd ..