# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# User.create(username: 'katie', password_digest: '1234')
# User.create(username: 'plantguy', password_digest: 'test')

# Plant.create(name: 'Kale', img_url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Boerenkool.jpg',
# description: 'Hardy cool-season green that is frost tolerant.', seed_indoor: "2024-03-21", 
# seedling_transplant: "2024-04-19", seed_outdoor: nil, user_id: 3, classification_id: 1)
# Plant.create(name: 'Peas', img_url: 'https://www.growjoy.com/store/pc/catalog/sugar_sprint_snap_pea_plant_1311_detail.jpg',
# description: 'Cool season crop that is easy to grow.', seed_indoor: nil, seedling_transplant:nil,
#  seed_outdoor: "2024-03-23", user_id: 3, classification_id: 2)
# Plant.create(name: 'Bok Choy', img_url: 'https://thewoksoflife.com/wp-content/uploads/2022/06/rows-bok-choy-1.jpg',
# description: 'Crunchy but tender plant with flowering center.', seed_indoor: "2024-03-23", 
# seedling_transplant: "2024-05-19", seed_outdoor: nil, user_id: 4, classification_id: 1)
# Plant.create(name: 'Green Bean', img_url: 'https://www.bhg.com/thmb/ganw2gXGTcLfU1VMd54QINH1GJw=/1100x0/filters:no_upscale():strip_icc()/derby-bush-green-bean-vine-3cf14517-d4f94ce826224466b200e01e65f56e68.jpg',
# description: 'Low maintenance tender vegetable.', seed_indoor:nil, seedling_transplant:nil,
#  seed_outdoor: "2024-05-19", user_id: 4, classification_id: 2)

# Classification.create(description: 'Brassica', conditions: 'Early season plant that prefers deep sandy to loamy soil with a pH of 6.5 to 7.5')
# Classification.create(description: 'Legume', conditions: 'Good for companion planting because of soil nitrogen fixation. Direct sew seeds in sunlight.')

# User.create(username: 'katie2', password: 'poop')