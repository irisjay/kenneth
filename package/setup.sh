#!/usr/bin/env bash
DIR="$(sudo dirname "$(readlink -f "$0")")"
cd "$DIR"


echo checking nvm version...
. ~/.nvm/nvm.sh
nvm install 8.7.0
nvm alias default node

echo
echo
echo checking npm version...
if ! npm outdated -g npm | grep -z npm; then
    echo npm is up to date
else
    echo trying to update npm...
    npm install -g npm
fi


npm install -g cordova


echo
echo
echo "checking java..."
if type -p java; then
    echo found java executable in PATH
    _java=java
elif [[ -n "$JAVA_HOME" ]] && [[ -x "$JAVA_HOME/bin/java" ]]; then
    echo found java executable in JAVA_HOME     
    _java="$JAVA_HOME/bin/java"
else
    echo no java
    exit 1
fi

version=$("$_java" -version 2>&1 | awk -F '"' '/version/ {print $2}')
echo version "$version"
if ! [[ "$version" > "1.8" ]]; then
    echo trying install java 8...
    sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get update
    sudo apt-get install oracle-java8-installer
else
    echo has java 8
fi

sudo apt-get install lib32z1