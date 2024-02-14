%%%
% File name: NeuronIdentificationScript.m
% Author: You!
% Date: 2/23/2023
%
% This is the main script for Problem 3 of the programming assignment in BMEG
% 257. This script has various "TODO" sections where you will be required
% to fill in code. This script also relies on a number of functions that
% you need to develop in order to run properly.

%% Part 1 - Data Storage
% First let's load in the neural data
image_neuron = imread( 'Data\NeuronsImage.jpg' );

figure(1); clf; hold on;
imshow(image_neuron);
title( 'Flourescent Neurons' );

%--------------------------------------------------------------------------
% 3.1 - TODO
%--------------------------------------------------------------------------
% Use this space to explore the size of the image_neuron variable.



%% Part 2 - Cross Correlation
%--------------------------------------------------------------------------
% 3.2 - TODO
%--------------------------------------------------------------------------
% This code loads in the template for what a "neuron" looks like. Please
% use this space to plot the neuron template.
template_neuron = imread('Data\template.jpg');



%--------------------------------------------------------------------------
% 3.3 - TODO
%--------------------------------------------------------------------------
% Open the file "ImageCorrelation.m" to implement the cross correlation of
% the template over the image. Here, you will also need to complete the
% commented-out lines to use your function to identify just the red and
% green neurons. Refer back to 3.1, how might you go about accessing just
% the red data and just the green data?

% Placeholder
red_correlation = zeros( size( image_neuron, 1), size( image_neuron,2 ) );
green_correlation = zeros( size( image_neuron, 1), size( image_neuron,2 ) );

% TODO - Fix this code
%red_correlation = ImageCorrelation( template_neuron, TODO );
%green_correlation = ImageCorrelation( template_neuron, TODO );

%--------------------------------------------------------------------------
% 3.4
%--------------------------------------------------------------------------
% You don't have to do anything here, this code simply plots your
% correlation results as black-white images. White is where the
% correlations are high, black is where the correlations are low. Use these
% images to answer 3.4

% This step is to normalize the range of the correlation matrix outputs so
% that we can visualize them
red_correlation_mask = ImageThresholding( red_correlation );
green_correlation_mask = ImageThresholding( green_correlation );

figure(10); clf; hold on;
imshow( red_correlation_mask );
figure(11); clf; hold on;
imshow( green_correlation_mask );