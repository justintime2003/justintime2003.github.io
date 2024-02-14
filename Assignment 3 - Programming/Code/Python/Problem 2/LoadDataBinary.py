# -*- coding: utf-8 -*-
"""
Created on Fri Jan 22 16:36:45 2021

Filename: LoadDataBinary.py
Author: Calvin Kuo
Date: 1/21/2021

This function loads data files in binary format

@author: Calvin
"""

import struct
import numpy as np

def LoadDataBinary( fname ):
    f = open(fname, "rb");
    file_data = np.array([])
    
    this_bin = f.read(4)
    while this_bin:
        file_data = np.append( file_data, struct.unpack('f', this_bin) )
        this_bin = f.read(4)
        
    f.close()
    data = file_data.reshape((2, (int( file_data.shape[0] /2 )))).transpose()
    return data
