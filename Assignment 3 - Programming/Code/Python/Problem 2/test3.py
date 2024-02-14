# -*- coding: utf-8 -*-
"""
Created on Fri Jan 22 16:23:44 2021

File: HeartBeatDetectionScript.py
Author: You!
Date: 2/23/2023

This is the main script for Problem 2 of the programming assignment in BMEG 257
This script has various "TODO" sections where you will be required to fill
in code. This script also relies on a number of functions located in other 
files that you need to develop in order to run properly. Note, the file setup
here was to best match the matlab setup. In reality, most people will group
relevant functions in a single python file.

@author: Calvin
"""

# Imports - tell python to load in other libraries that will be used
# You should not need to import anything else.
import numpy as np
import matplotlib.pyplot as plt
from LoadDataBinary import LoadDataBinary
from ForLoopCrossCorr import ForLoopCrossCorr
from MatrixCrossCorr import MatrixCrossCorr
from ThresholdBeats import ThresholdBeats

# The main script
def main():
    
    #######################
    # PART 1 - Data Storage
    #######################
    ecg_data = LoadDataBinary( "Data/ECG_Signal.bin" )
    
    ##########################################################################
    # 2.1 - TODO
    ##########################################################################
    # The following code is already written for you and demonstrates how to
    # plot data. But you will have to uncomment it out for it to run.
    fig1 = plt.figure(1)
    fig1.clf()
    ax = fig1.add_subplot(1,1,1)
    ax.plot( ecg_data[:,0], ecg_data[:,1] )
    ax.set(xlabel="Time (s)", ylabel="Voltage (microvolts)")
    ax.set_title("BMEG 257 ECG REcording")
    #plt.show() #added to popup diagram

    ##########################################################################
    # 2.2 - TODO
    ##########################################################################
    # Use this space to explore the size of the neural_data variable.
    #print(ecg_data.size); 
    #print(ecg_data.shape);
    
    ##########################################################################
    # 2.4 - TODO
    ##########################################################################
    # Use this space to save the neural_data as a csv file.
    # Hint: Look up the "savetxt" function in numpy. There are other methods
    # to save data to csv, but this is the one I usually use.
    
    # Use this filename to save your data (it will go into the data folder)
    filename = 'Data/neural_data.csv'
    np.savetxt(filename, ecg_data, fmt='%.6g',delimiter=',')
    print("File saved as csv")
    
    
    

"""
The following code allows us to run this file as a script. Note, this not the
only way to do this, but the benefit of using this method is that all the
variables that are created as part of the script have local scope.
"""
if __name__ == "__main__":
    main()
