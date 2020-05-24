# frozen_string_literal: true

class Comment < ApplicationRecord
  belongs_to :article
  validates :commenter, presence: true, length: { minimum: 5 }
end
