#!/usr/bin/env bash
DIR="$(sudo dirname "$(readlink -f "$0")")"
cd "$DIR"
cd dist

#export GRADLE_OPTS="-Xmx64m -Dorg.gradle.jvmargs='-Xmx400m -XX:MaxPermSize=64m'";
export ORG_GRADLE_PROJECT_cdvBuildToolsVersion=20; cordova build android