from bym2 import generate_model


file1 = './datasets/world_coordinates.csv'
file2 = './datasets/mod-starbucks.csv'
file3 = './datasets/starbucks.csv'

if __name__ == '__main__':
    generate_model(data_file=file1)
    generate_model(data_file=file2)
    generate_model(data_file=file3)

