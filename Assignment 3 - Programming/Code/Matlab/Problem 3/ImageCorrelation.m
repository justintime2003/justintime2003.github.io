%%%
% File name: ImageCorrelation.m
% Author: You!
% Date: 2/23/2023
%
% Use this function to develop the for loop cross correlation. Only adjust
% code within the "TODO" brackets to ensure that this code will still work
% with the main script.

function corr_image = ImageCorrelation( template, image )

    % Book-keeping - To do this type of image correlation, it is common to
    % first subtract the mean value from the template.
    template = double( template ) / 255;
    template = template - mean( template, 'all' );
    image = double(image) / 255;

    corr_image = zeros( size( image ) );
    
    %--------------------------------------------------------------------------
    % 3.3 - TODO
    %--------------------------------------------------------------------------
    % Implement your 2-D image cross correlation here. You'll need to
    % implement the outer for loops that let you extract sections of the
    % larger "image" to cross correlate against the "template". Use the
    % equivalent code in problem 2 for inspiration on how to set this up.
    % You are welcome to use any method you like to perform this cross
    % correlation. Use the variable corr_image to store the correlation
    % values
    
end