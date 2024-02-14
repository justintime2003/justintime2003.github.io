# -*- coding: utf-8 -*-
"""
Created on Sun Jan 24 15:57:20 2021

File name: MatrixCrossCorr.py
Author: You!
Date: 2/23/2023

Use this function to develop the for loop cross correlation. Only adjust
code within the "TODO" brackets to ensure that this code will still work
with the main script.

@author: Calvin
"""

import numpy as np

def main(): 
    temp1 = np.array([0, 3, -1, 0])
    temp2 = np.array([1, 2, 0, 0, 0, 3, -1, 0, 0])
    heartbeat = np.transpose(temp1)
    ecg_data = np.transpose(temp2)
    #print(ecg_data.shape[0])
    #print(heartbeat.shape[0])
    print(MatrixCrossCorr(ecg_data, heartbeat)); 

def MatrixCrossCorr(ecg_data, heartbeat):
    samples = ecg_data.shape[0]; #Gets the size of ecg_data matrix
    heartbeat_samples = heartbeat.shape[0]; #Gets the size of heartbeat matrix
    cross_data = np.zeros( [(samples - heartbeat_samples), 1] );
    for i in range( samples - heartbeat_samples ):
        #create a new array for ecg_data with the same size as heartbeat array
        #calculate the dot product between ecg_data and heartbeat array
        #TODO
        temp_matrix = ecg_data[i:i+heartbeat_samples]
        HBTransposed = np.transpose(heartbeat)
        prod = HBTransposed @ temp_matrix #matrix multiply with @
        #prod = np.matmul(temp_matrix, HBTransposed)
        cross_correlation = np.sum(prod)
        cross_data[i] = cross_correlation
        #TODO
    return cross_data

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
