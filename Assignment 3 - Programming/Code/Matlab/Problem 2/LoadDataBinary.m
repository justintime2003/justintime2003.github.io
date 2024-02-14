%%%
% File name: LoadDataBinary.m
% Author: Calvin Kuo
% Date: 1/17/2021
%
% This script saves data files in binary format.

function data = LoadDataBinary( fname )
    fileID = fopen(fname,'r');
    A = fread(fileID,Inf,'float');
    fclose( fileID );
    
    % Resize the data to a two column matrix
    totData = length(A);
    data = reshape( A, [totData/2, 2] );
end