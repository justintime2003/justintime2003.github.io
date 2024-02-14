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
    plt.show() #Added to display all open figues

    
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
    
    fig2 = plt.figure(2);
    fig2.clf()
    ax = fig2.add_subplot(1,1,1)
    plt.imshow(template_neuron);
    ax.set_title( 'Template Neuron' );
    plt.show() #Added to display all open figues
    
    
    

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
