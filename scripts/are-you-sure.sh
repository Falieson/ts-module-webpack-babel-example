#!/bin/bash

read -p "are you sure?`echo $'\n> '`" A
if [[ "$A" = "y" || "$A" = "Y" ]]; then
  echo "continuing"
  exit 0;
else
  echo "aborting!"
  exit 1;
fi