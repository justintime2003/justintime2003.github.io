# -*- coding: utf-8 -*-
"""
Created on Sun Jan 24 16:41:25 2021

File name: ImageThresholding.py
Author: Calvin Kuo
Date: 1/24/2021

This function will determine which pixels in your correlation matrix are
above the defined threshold and return a 0/1 matrix of the same size to
plot. There is some additional book-keeping here to make this function
more versatile for different types of image inputs.

@author: Calvin
"""

import numpy as np

def ImageThresholding( image ):

    # Book-keeping - This section of code will clamp the pixel range in the
    # image matrix to 0-1. This allows you to pass in whatever matrix you
    # want and a threshold of 0.5 will always represent "50%" of the matrix
    # intensity.
    image_offset = image - np.min( image );
    image_norm = image_offset / np.max( image_offset );
    
    # Threshold above which we determine there is a neuron
    threshold = 0.5;
    
    # Compare each pixel in the normalized image to the threshold. This
    # will return a 1 if pixel is above threshold, and a 0 if not.
    threshold_image = image_norm > threshold;

    return threshold_image
