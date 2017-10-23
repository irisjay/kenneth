#!/usr/bin/env bash
DIR="$(sudo dirname "$(readlink -f "${BASH_SOURCE[0]}")")"
cd "$DIR"
cd ..

cd temp

cd .gradle
export GRADLE_USER_HOME="$(pwd)"
cd ..

cd .android
export ANDROID_SDK_HOME="$(pwd)"
cd ..

cd gradle
cd gradle-2.14.1/bin
export PATH=$PATH:"$(pwd)"
cd ../../..

cd android-sdk
export ANDROID_HOME="$(pwd)"
cd tools
export PATH=$PATH:"$(pwd)"
cd bin
export PATH=$PATH:"$(pwd)"
cd ../..
cd ..

cd ..