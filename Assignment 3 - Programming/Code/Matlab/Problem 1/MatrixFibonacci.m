%%%
% File name: MatrixFibonacci.m
% Author: You!
% Date: 2/22/2023
%
% Use this function to develop the matrix implementation of the Fibonacci
% number equation. Only adjust code within the "TODO" brackets.

%--------------------------------------------------------------------------
% 1.2 - TODO
%--------------------------------------------------------------------------
% IMPLEMENT THE MATRIX VERSION OF FIBONACCI HERE. You just need to fill in
% the blank on this matrix. Some variables that are provided:
% n = the Nth fibonacci number that you want to solve for

n = 40; % Which fibonacci number do you want
mat_fib = []; % TODO - REPLACE THE RIGHT HAND SIDE WITH YOUR SOLUTION

fib_base = [1;1]; % First and second fibonacci numbers

fib_n = mat_fib * fib_base; % Solve for the nth and n-1th fibonacci numbers

%--------------------------------------------------------------------------
% 1.2 - END TODO

fib_n(1) % Print out the nth Fibonacci number