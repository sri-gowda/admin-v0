#!/bin/bash
#ui deploy script - v0.1

set -e
echo "...Start of script..."
IPS="13.234.30.212"
LOCAL_DIST_DIR="/Users/sri/Documents/projects/pavan/sample-app/"
DIST_FOLDER="craftn-admin"

REMOTE_DIST_DIR="/usr/share/nginx"

APP_BUILD_SCRIPT="build"

SHELL_CONST="ssh -i srikanthgowda.pem ec2-user@"

run_remote_command()
{
	echo in run_remote_command
	IP=$1
	CMD=$2

	cd ~
	$SHELL_CONST$1 "$2"
}

make_dist()
{
    BUILDSCRIPT=$1
	echo ------------------ in make_dist
	echo ------------------ running $BUILDSCRIPT
	cd $LOCAL_DIST_DIR
	npm run $BUILDSCRIPT
	# ls
	rm -f $DIST_FOLDER.zip #adding new
	zip -r $DIST_FOLDER.zip $DIST_FOLDER/* #note the /*
}

send_dist()
{
	echo ------------------in send_dist
	IP=$1
    cd
	scp -i srikanthgowda.pem $LOCAL_DIST_DIR$DIST_FOLDER.zip ec2-user@$IP:$REMOTE_DIST_DIR
}

unzip_dist()
{
	echo ------------------in unzip_dist
	IP=$1
	run_remote_command $IP "cd $REMOTE_DIST_DIR && unzip $DIST_FOLDER.zip"  #-d $DIST_FOLDER
}

remove_deployed_dist()
{
	echo ------------------in remove_deployed_dist
	IP=$1
    run_remote_command $IP "cd $REMOTE_DIST_DIR && rm $DIST_FOLDER.zip && rm -rf $DIST_FOLDER"
}

#Start

runAppDeployment(){
    cd ~
    # sudo pwd
    make_dist $APP_BUILD_SCRIPT
    for ip in $IPS
    do
        remove_deployed_dist $ip
        send_dist $ip
        unzip_dist $ip
    done
}

start(){

echo ----------------- CHAT.SRIKANTHGOWDA.IN DEPLOYMENT STARTING -----------------

runAppDeployment

echo ----------------- CHAT.SRIKANTHGOWDA.IN DEPLOYMENT COMPLETE -----------------

}

start

echo "...End of script..."




