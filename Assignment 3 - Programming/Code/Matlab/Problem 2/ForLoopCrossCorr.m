%%%
% File name: ForLoopCrossCorr.m
% Author: You!
% Date: 2/23/2023
%
% Use this function to develop the for loop cross correlation. Only adjust
% code within the "TODO" brackets to ensure that this code will still work
% with the main script.

function cross_data = ForLoopCrossCorr(ecg_data, heartbeat)
    
    % The outer for loop is written for you as it cycles through the ecg
    % data
    samples = length( ecg_data );
    heartbeat_samples = length( heartbeat );
    
    cross_data = zeros( (samples - heartbeat_samples + 1), 1 );
    for i=1:( samples - heartbeat_samples + 1 )
        
        %--------------------------------------------------------------------------
        % 2.6 - TODO
        %--------------------------------------------------------------------------
        % Implement your for loop cross correlation here.

        cross_correlation = 0;
        
        %--------------------------------------------------------------------------
        % 2.6 - END TODO
        %--------------------------------------------------------------------------
        
        cross_data(i) = cross_correlation;
    end
end