# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding users"
User.create(username: "user1", password: "pass123", email: "user1@email.com", firstname: "FName U1", lastname: "Lname U1")
User.create(username: "user2", password: "pass123", email: "user2@email.com", lastname: "U2 surname")
User.create(username: "user3", password: "pass123", email: "user3@email.com")


puts "Creating seed with user IDs 1 & 2"

Blog.create(title: "Blog 1 title", content: "Some blog 1 content, should be user 1", user_id: 1)
Blog.create(title: "User 2 blog - no content", user_id: 2)

puts "Done seeding blogs"
puts "Seeding comments"

Comment.create(content: "First comment on blog 1", user_id: 1, blog_id: 1)
Comment.create(content: "Comment by second user", user_id: 2, blog_id: 1)
Comment.create(content: "Replying to first comment", user_id: 2, blog_id: 1, comment_id: 1)

Comment.create(content: "Some comment on 2nd blog", user_id: 2, blog_id: 2)
Comment.create(content: "replying to user 2 on 2nd blog", user_id: 1, blog_id: 2, comment_id: 5)

puts "Done seeding comments"