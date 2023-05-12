class Dictionary < ApplicationRecord
  validates :name, presence: true

  has_many :words,dependent: :destroy
end
