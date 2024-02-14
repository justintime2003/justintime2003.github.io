# -*- coding: utf-8 -*-
"""
Created on Sun Jan 24 16:27:12 2021

File name: NeuronIdentificationScript.py
Author: You!
Date: 2/23/2023

This is the main script for Problem 3 of the programming assignment in BMEG
257. This script has various "TODO" sections where you will be required
to fill in code. This script also relies on a number of functions that
% you need to develop in order to run properly.

@author: Calvin
"""

# Imports - tell python to load in other libraries that will be used
# You should not need to import anything else.
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as img
from ImageCorrelation import ImageCorrelation
from ImageThresholding import ImageThresholding

# The main script
def main():
    
    #######################
    # PART 1 - Data Storage
    #######################
    # First let's load in the neural data
    image_neuron = img.imread( 'Data/NeuronsImage.jpg' );

    fig1 = plt.figure(1);
    fig1.clf()
    ax = fig1.add_subplot(1,1,1)
    plt.imshow(image_neuron);
    ax.set_title( 'Flourescent Neurons' );
    #plt.show() #Added to display all open figues

    
    ##########################################################################
    # 3.1 - TODO
    ##########################################################################
    # Use this space to explore the size of the image_neuron variable.
    
    
    
    ############################
    # PART 2 - Cross Correlation
    ############################
    
    ##########################################################################
    # 3.2 - TODO
    ##########################################################################
    # This code loads in the template for what a "neuron" looks like. Please
    # use this space to plot the neuron template.
    template_neuron = img.imread('Data/template.jpg');
    
    
    
    ##########################################################################
    # 3.3 - TODO
    ##########################################################################
    # Open the file "ImageCorrelation.py" to implement the cross correlation of
    # the template over the image. Here, you will also need to complete the
    # commented-out lines to use your function to identify just the red and
    # green neurons. Refer back to 1.1, how might you go about accessing just
    # the red data and just the green data?

    # Placeholder
    red_correlation = np.zeros( [image_neuron.shape[0], image_neuron.shape[1]] )
    green_correlation = np.zeros( [image_neuron.shape[0], image_neuron.shape[1]] )

    # TODO - Fix this code
    red_correlation = ImageCorrelation( template_neuron, image_neuron[:, :, 0]);
    green_correlation = ImageCorrelation( template_neuron, image_neuron[:, :, 1]);
    
    
    ##########################################################################
    # 3.4
    ##########################################################################
    # You don't have to do anything here, this code simply plots your
    # correlation results as black-white images. White is where the
    # correlations are high, black is where the correlations are low. Use these
    # images to answer 3.4
    
    # This step is to normalize the range of the correlation matrix outputs so
    # that we can visualize them
    red_correlation_mask = ImageThresholding( red_correlation );
    green_correlation_mask = ImageThresholding( green_correlation );
    
    fig10 = plt.figure(10);
    fig10.clf()
    ax = fig10.add_subplot(1,1,1)
    plt.imshow( red_correlation_mask );
    
    fig11 = plt.figure(11);
    fig11.clf();
    ax = fig11.add_subplot(1,1,1)
    plt.imshow( green_correlation_mask );
    plt.show()
    

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
