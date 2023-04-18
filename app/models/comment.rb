class Comment < ApplicationRecord
    belongs_to :user
    validates :user, presence: true

    belongs_to :blog
    validates :blog, presence: true

    has_many :comments
    belongs_to :comment, optional: true
end
