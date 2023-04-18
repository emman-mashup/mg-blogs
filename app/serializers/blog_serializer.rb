class BlogSerializer < Serializer
    # include JSONAPI::Serializer

    # set_key_transform :camel_lower

    attributes :id, :title, :content, :up_votes, :down_votes, :user_id

    attribute :formatted_created_at do |record|
        record.created_at.strftime("%B %d %Y")
    end
end