#!/usr/bin/env bash
DIR="$(sudo dirname "$(readlink -f "$0")")"
cd "$DIR"

echo installing java 8 by hack...

wget http://ftp.heanet.ie/mirrors/funtoo/distfiles/oracle-java/jdk-8u144-linux-x64.tar.gz
sudo mkdir /opt/jdk
sudo tar -zxf jdk-8u144-linux-x64.tar.gz -C /opt/jdk
sudo ls /opt/jdk

sudo update-alternatives --install /usr/bin/java java /opt/jdk/jdk1.8.0_144/bin/java 100
sudo update-alternatives --install /usr/bin/javac javac /opt/jdk/jdk1.8.0_144/bin/javac 100

update-alternatives --display java
update-alternatives --display javac

java -version