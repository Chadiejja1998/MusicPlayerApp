require "test_helper"

class MusicPlayerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get music_player_index_url
    assert_response :success
  end
end
