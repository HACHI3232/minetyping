class Word < ApplicationRecord
  validates :word, presence: true
  validates :mean, presence: true



  validates :dictionary, presence: true

  belongs_to :dictionary

end
