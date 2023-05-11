class Word < ApplicationRecord
  varidates :name, presence :true
  varidates :word, presence :true
  validates :dictionary_id, presence: true

  belongs to :dictionaries

end
