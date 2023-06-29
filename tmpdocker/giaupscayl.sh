#!/bin/bash


echo "GIA-Upscayl Placeholder Script"
echo "------------------------------"
echo "-- This will be the command executing what I want"
echo "--- param 1,2  $1 $2 $3 $4 $5 "
echo "-------------------------------"
echo "-- Placeholder Curling Discord channel Web hook : "
#@STCGoal WebHook in the Env
export hookurl=https://discord.com/api/webhooks/1124023097977229452/5lB7UpdJ2Ete5S6QAgs-8AkgFNGtQubzv14r5OLJFBxLsFmfCUp85YfzD-EI6d8oURHR

# furl=$giacdn/$f
furl=http://ianus.jgwill.com/cdn/ellia.jpg
hookcontent="GIAUpscayl WebApp Placeholder: $furl $1 $2 $3 $4 $5"
curl -X POST -H "Content-Type: application/json" \
  -d '{"username": "GIAUpscayl WebApp Bot","content": "Ran on Azure :  '"$hookcontent"'"}'  \
  $hookurl
