%%%
% File name: RecursionFibonacci.m
% Author: You!
% Date: 2/22/2023
%
% Use this function to develop the recursive implementation of the
% Fibonacci number equation. Only adjust code within the "TODO" brackets.

n = 40; % Which fibonacci number do you want

fib_n = fib_recurse(n) % Print out the nth Fibonacci number

%--------------------------------------------------------------------------
% 1.1 - TODO
%--------------------------------------------------------------------------
% IMPLEMENT THE RECURSIVE VERSION OF FIBONACCI HERE. You just need to fill
% in the lines with TODO on them.

% Recursive function
function fib_num = fib_recurse(i)

    % Base cases
    if i == 1
        fib_num = 1;
    elseif i == 2
        fib_num = 1;
    else
        % Recursion
        fib_num = 0; % TODO - FILL THIS IN
    end
end

%--------------------------------------------------------------------------
% 1.1 - END TODO

