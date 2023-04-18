class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :blog

    has_many :comments
    belongs_to :comment, optional: true
end
