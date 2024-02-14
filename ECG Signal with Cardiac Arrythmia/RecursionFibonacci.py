# -*- coding: utf-8 -*-
"""
Created on Thu Feb 23 10:55:08 2023

File name: RecursionFibonacci.py
Author: Justin The
Date: 2/23/2023

TUse this script to develop the recursive implementation of the Fibonacci
number equation. Only adjust code within the "TODO" brackets.

@author: Calvin
"""
import timeit

# The main script
def main():
    
    n = 40 # Which fibonacci number do you want    
    start = timeit.default_timer()
    fib_n = fib_recurse(n) # Call the recursion function
    stop = timeit.default_timer()
    print( fib_n ) # Print out the nth Fibonacci number
    print('Time: ', stop-start)

##########################################################################
# 1.1 - TODO
##########################################################################
# IMPLEMENT THE RECURSIVE VERSION OF FIBONACCI HERE. You just need to fill in
# the blank on this matrix. Some variables that are provided:
# n = the Nth fibonacci number that you want to solve for

def fib_recurse(i):
    
    # Base cases
    if (i==1):
        fib_num = 1;
    elif (i==2):
        fib_num = 1;
    elif (i==0):
        fib_num = 0; 
    else:
        fib_num = fib_recurse(i - 1) + fib_recurse(i-2);  # Recursive Case
    
    return fib_num
    
##########################################################################
# 1.1 - END TODO
##########################################################################

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
