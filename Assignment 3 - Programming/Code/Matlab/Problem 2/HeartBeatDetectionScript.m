%%%
% File name: HeartBeatDetectionScript.m
% Author: You!
% Date: 2/23/2023
%
% This is the main script for Problem 2 of the programming assignment in
% BMEG 257. This script has various "TODO" sections where you will be
% required to fill in code. This script also relies on a number of
% functions that you need to develop in order to run properly.

%% Part 1 - Data Storage
% First let's load in the ECG data
ecg_data = LoadDataBinary( 'Data\ECG_Signal.bin' );

%--------------------------------------------------------------------------
% 2.1 - TODO
%--------------------------------------------------------------------------
% The following code is already written for you and demonstrates how to
% plot data. But you will have to uncomment it out for it to run.

figure(1); clf; hold on;
plot( ecg_data(:,1), ecg_data(:,2) );
xlabel( 'Time (s)' );
ylabel( 'Voltage (microvolts)' );
title( 'BMEG 257 ECG Recording' );

%--------------------------------------------------------------------------
% 2.2 - TODO
%--------------------------------------------------------------------------
% Use this space to explore the size of the ecg_data variable.


%--------------------------------------------------------------------------
% 2.4 - TODO
%--------------------------------------------------------------------------
% Use this space to save the ecg_data as a csv file.
% Hint, depending on your matlab version, look up either the 'writematrix'
% function (matlab 2019b and above) or the csvwrite function (before matlab
% 2019b).

% Use this filename to save your data
filename = 'ecg_data.csv';


%% Part 2 - Cross Correlation
%--------------------------------------------------------------------------
% 2.5 - TODO
%--------------------------------------------------------------------------
% This code loads in the template for a heart beat that we will be
% using. Please plot it here (refer to 1.1 on how plotting works) and
% also refer to the matlab plotting documentation.
% Hint, before you plot, remember to create a new figure. Otherwise your
% plots will go into the same figure as 1.1

heartbeat = LoadDataBinary( 'Data\Template.bin' );

%--------------------------------------------------------------------------
% 2.6 - TODO
%--------------------------------------------------------------------------
% DO NOT ADJUST CODE HERE. OPEN THE FILE "ForLoopCrossCorr.m" AND PUT YOUR
% CODE THERE.

for_cross_data = ForLoopCrossCorr( ecg_data(:,2), heartbeat(:,2) );

%--------------------------------------------------------------------------
% 2.7 - TODO
%--------------------------------------------------------------------------
% DO NOT ADJUST CODE HERE. OPEN THE FILE "MatrixCrossCorr.m" AND PUT YOUR
% CODE THERE.

mat_cross_data = MatrixCrossCorr( ecg_data(:,2), heartbeat(:,2) );

%--------------------------------------------------------------------------
% 2.8 - TODO
%--------------------------------------------------------------------------
% DO NOT ADJUST CODE HERE. OPEN THE FILE "ThresholdBeats.m" AND PUT YOUR
% CODE THERE.

for_beats = ThresholdBeats( for_cross_data );
mat_beats = ThresholdBeats( mat_cross_data );

%--------------------------------------------------------------------------
% 2.8 - END TODO
%--------------------------------------------------------------------------
% THIS CODE WILL HELP VISUALIZE YOUR HEART BEATS. DO NOT ADJUST.
figure(10); clf; hold on;
subplot( 2,1,1 );
plot( ecg_data(:,1), ecg_data(:,2) )
ylabel('Voltage (microvolts)');
title( 'Raw ECG Measurement' );

subplot( 2,1,2 ); hold on;
plot( ecg_data(1:length(for_cross_data),1), for_beats );
xlabel('Time (s)');
title( 'Heart Beats (For Loops)' );

figure(11); clf; hold on;
subplot( 2,1,1 );
plot( ecg_data(:,1), ecg_data(:,2) )
ylabel('Voltage (microvolts)');
title( 'Raw ECG Measurement' );

subplot( 2,1,2 ); hold on;
plot( ecg_data(1:length(mat_cross_data),1), mat_beats );
xlabel('Time (s)');
title( 'Heart Beats (Matrices)' );