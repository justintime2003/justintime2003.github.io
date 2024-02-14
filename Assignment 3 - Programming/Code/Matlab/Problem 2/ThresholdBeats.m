%%%
% File name: ThresholdBeats.m
% Author: You!
% Date: 2/23/2023
%
% Use this function to develop the for loop cross correlation. Only adjust
% code within the "TODO" brackets to ensure that this code will still work
% with the main script.

function beats = ThresholdBeats( cross_corr )

    % Set up the output for where heart beats are
    beats = zeros( length( cross_corr ), 1 );

    %--------------------------------------------------------------------------
    % 2.8 - TODO
    %--------------------------------------------------------------------------
    % Implement your thresholding here. The beats vector above
    % is already set up as your output and is the same size as the input
    % cross correlation. When you identify a heartbeat (e.g. cross
    % correlation exceeds threshold), set the corresponding location in 
    % beats to 1.

    threshold = 7;

    %--------------------------------------------------------------------------
    % 2.8 - END TODO
    %--------------------------------------------------------------------------
        
end