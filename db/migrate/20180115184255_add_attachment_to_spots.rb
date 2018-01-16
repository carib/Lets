class AddAttachmentToSpots < ActiveRecord::Migration[5.1]
  def change
    add_attachment :spots, :spot_image 
  end
end
