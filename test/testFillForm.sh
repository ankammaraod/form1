#! /bin/bash

FAILED='❌'
PASSED='✅'

function assert(){
 local actual=$1
 local expected=$2
 local description=$3

 echo $actual > /tmp/actual.txt
 echo $expected > /tmp/expected.txt
 diff /tmp/actual.txt /tmp/expected.txt >/dev/null

 code=$?

 status=$FAILED
 if [[ $code -eq 0 ]] 
 then
   status=$PASSED
 fi

  echo $status $description
};


function case1(){
 local prompts=$(node fillForm.js<< eof 
ankammarao
2001-12-14
eating,sleeping
9701679541
rama_street
pandrapadu
eof
);

  expectedPrompts="Please enter your name : Please enter your dob : Please enter your hobbies : Please enter your mobile number : Please enter your address 1 : Please enter your address 2 : Thank you"
  assert "$prompts" "$expectedPrompts" "prompts"
  expectedResponses='{"name":"ankammarao","dob":"2001-12-14","hobbies":["eating","sleeping"],"mobileNumber":"9701679541","address":"rama_street\npandrapadu"}'
  assert `cat ./form.json` "$expectedResponses" "filled contents"
}

case1