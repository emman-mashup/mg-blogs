class Serializer
    include JSONAPI::Serializer

    set_key_transform :camel_lower
end