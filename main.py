from bym2 import generate_model, generate_map

file0 = './datasets/us_unemployment_2012.csv'
file1 = './datasets/mod-starbucks.csv'
file2 = './datasets/world_coordinates.csv'
file3 = './datasets/starbucks.csv'

if __name__ == '__main__':

    generate_model(data_file=file0)
    generate_map(geo_file='datasets/us_states.json', data_file='mod_results.csv',
                 col=['State', 'Rate'],
                 color='BuPu', legend='legend', html='map.html')
