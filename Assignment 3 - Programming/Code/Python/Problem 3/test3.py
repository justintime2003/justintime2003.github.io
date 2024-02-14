# -*- coding: utf-8 -*-
"""
Created on Sun Jan 24 16:51:05 2021

File name: ImageCorrelation.py
Author: You!
Date: 1/24/2021

Use this function to develop the for loop cross correlation. Only adjust
code within the "TODO" brackets to ensure that this code will still work
with the main script.

@author: Calvin
"""

import numpy as np

def main(): 
    template = np.matrix('1, -1; -1, 1')
    image = np.matrix('1 1 -1 1 0 1; 1 -1 1 1 0 0; 0 -1 0 1 0 1; 1 1 1 1 -1 1; 1 1 0 0 1 1; 0 1 0 1 0 1')
    print(ImageCorrelation(template, image)); 

def ImageCorrelation( template, image ):
    # Book-keeping - To do this type of image correlation, it is common to
    # first subtract the mean value from the template.
    #template = template / 255.
    #template = template - np.mean( template );
    #image = image / 255.
    corr_matrix = np.zeros( [image.shape[0], image.shape[1]] );
    template_row_samples = template.shape[0]
    template_column_samples = template.shape[1]

    for j in range(image.shape[1] - 1):  #iterate through columns 
        for i in range(image.shape[0] - 1):  #iterate through row
            temp_matrix = image[j:j+template_row_samples, i:i+template_column_samples]
            #print(temp_matrix)
            product = np.multiply(template, temp_matrix)
            corr_matrix[j][i] = np.sum(product)
            
    #print(corr_matrix)
    return corr_matrix
    ###########################################################################
    # 3.3 - TODO
    ###########################################################################
    # Implement your 2-D image cross correlation here. You'll need to
    # implement the outer for loops that let you extract sections of the
    # larger "image" to cross correlate against the "template". Use the
    # equivalent code in problem 2 for inspiration on how to set this up.
    # You are welcome to use any method you like to perform this cross
    # correlation. Use the variable corr_matrix to store the correlation
    # values
    

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()

