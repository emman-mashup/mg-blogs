class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :content
      t.integer :title :up_votes, default: 0
      t.integer :down_votes, default: 0

      t.timestamps
    end
  end
end
