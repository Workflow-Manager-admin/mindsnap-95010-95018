#!/bin/bash
cd /home/kavia/workspace/code-generation/mindsnap-95010-95018/main_container_for_mindsnap
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

