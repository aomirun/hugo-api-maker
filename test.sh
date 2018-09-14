#!/usr/bin/env bash

for i in $(seq 100)
do
   hugo && node cli
   sleep 2 &
done
